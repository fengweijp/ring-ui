import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import memoize from '../global/memoize';

import Theme from '../global/theme';

import Link from '../link/link';

import styles from './tabs.css';

import Tab from './tab';


export default class Tabs extends PureComponent {
  static Theme = Theme;
  static propTypes = {
    theme: PropTypes.string,
    selected: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    theme: Theme.LIGHT,
    onSelect() {}
  };

  handleSelect = memoize(key => () => this.props.onSelect(key));

  getTabTitleCaption = (title, isSelected) => {
    const renderTitle = () => Tab.renderTitle(title, isSelected);
    return (
      <>
        <span className={styles.visible}>{renderTitle()}</span>
        {/* hack for preserving constant tab width*/}
        <span className={styles.hidden}>{renderTitle()}</span>
      </>
    );
  };

  getTabTitle = ({props}, i) => {
    const {selected} = this.props;
    // eslint-disable-next-line react/prop-types
    const {title, id, disabled, href} = props;
    const key = id || String(i);
    const isSelected = key === selected;
    const titleClasses = classNames(styles.title, {
      [styles.selected]: isSelected
    });

    const tabCaption = this.getTabTitleCaption(title, isSelected);

    return (
      <Link
        active
        key={key}
        href={href}
        innerClassName={titleClasses}
        className={titleClasses}
        disabled={disabled}
        onClick={this.handleSelect(key)}
      >{() => tabCaption}</Link>
    );
  };


  render() {
    const {className, children, selected, theme} = this.props;
    const classes = classNames(styles.tabs, className, styles[theme]);
    const childrenArray = React.Children.toArray(children).filter(Boolean);

    return (
      <div className={classes}>
        <div className={styles.titles}>
          {childrenArray.map(this.getTabTitle)}
        </div>
        <div className={styles.tab}>
          {childrenArray.find(({props}, i) => (props.id || String(i)) === selected)}
        </div>
      </div>
    );
  }
}

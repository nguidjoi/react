import * as React from 'react';
import styles from './Fwp.module.scss';
import { IFwpProps } from './IFwpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Fwp extends React.Component<IFwpProps, {}> {
  public render(): React.ReactElement<IFwpProps> {
    return (
      <div className={ styles.fwp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

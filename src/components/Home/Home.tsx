import React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { IHomeConnectedProps, IHomeDispatchProps } from './HomeProps';

export class Home extends Component<IHomeConnectedProps & IHomeDispatchProps> {
  constructor(props: IHomeConnectedProps & IHomeDispatchProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ marginTop: 200 }}>{this.props.title || '成功!'}</Text>
        <Button
          onPress={() => {
            this.props.activateKabaya('私の名前はカバヤです');
          }}
          title="Clice"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}


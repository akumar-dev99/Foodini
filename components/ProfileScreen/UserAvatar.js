import React from 'react';
import { Avatar } from "react-native-elements";

export default function UserAvatar(props) {
    return (
        <Avatar
          title={props.userName[0]}
          name={props.userName}
          source={ {uri: props.userImage} }
          rounded
          size={120}
          containerStyle={{elevation: 2}}
        />
    )
}

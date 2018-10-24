import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { channelsListQuery } from './ChannelsListWithApollo';

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { name: evt.target.value },
        refetchQueries: [{ query: channelsListQuery }]
      })
      .then( res => {
        evt.target.value = ''
      })
    }
  };

  return (
    <input
      type="text"
      placeholder="new channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

export default graphql(addChannelMutation)(AddChannel)
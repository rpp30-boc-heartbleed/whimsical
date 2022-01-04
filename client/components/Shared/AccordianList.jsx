import React, { useState } from 'react';
import { List } from 'react-native-paper';

const AccordianList = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordion List Sample">
      <List.Accordion
        title="Controlled Accordion List"
        left={props => <List.Icon {...props} icon="equal" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default AccordianList;
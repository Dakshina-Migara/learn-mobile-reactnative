import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function CardComponent() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />

        <Card.Actions style={styles.actions}>
          <Button mode="outlined">Cancel</Button>
          <Button mode="contained">Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    elevation: 4,
  },
  actions: {
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
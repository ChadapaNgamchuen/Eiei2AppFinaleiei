import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const assignments = [
  { id: '1', title: 'Final Exam', dueDate: 'No due date' },
  { id: '2', title: 'Quiz week15', dueDate: 'Due May 13, 23:59' },
  { id: '3', title: 'week14 Hash Table', dueDate: 'Due Apr 24, 18:00' },
  { id: '4', title: 'Shortest Path', dueDate: 'Due Apr 8, 18:00' },
  { id: '5', title: 'Dynamic Programming (minstep)', dueDate: 'Due Mar 25, 18:00', comments: 1 },
  { id: '6', title: 'Midterm DSI208', dueDate: 'Due Mar 5, 16:00' },
  { id: '7', title: 'week06 Algorithm Complexity', dueDate: 'Due Feb 27, 18:00' },
  { id: '8', title: 'week05 Search Algorithms Quiz', dueDate: 'Due Feb 19, 23:59' },
  { id: '9', title: 'week05 search video', dueDate: 'Due Feb 12, 18:00' },
];

const AssignmentList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <FontAwesome5 name="clipboard-list" size={30} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dueDate}>{item.dueDate}</Text>
      </View>
      {item.comments && (
        <View style={styles.commentContainer}>
          <FontAwesome5 name="comment" size={14} color="gray" />
          <Text style={styles.commentText}>{item.comments}</Text>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={assignments}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <AssignmentList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'gray',
  },
  navTextActive: {
    color: 'blue',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    marginTop: 10,
    elevation: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  dueDate: {
    marginTop: 5,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginLeft: 5,
    color: 'gray',
  },
});

export default App;

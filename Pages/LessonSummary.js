import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import PressableButton from '../Components/PressableButton';
import Lesson from './Lesson';
import LessonComplete from './LessonComplete';
import { Divider } from '@rneui/themed';
import { getTopics, getTopicLessons } from '../Connection/ChatGPT'


class LessonSummary extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    topic: this.props.route.params.topic,
    topicList: [],
    topicListData: [],
    page: 0
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await getTopics(this.state.topic)
      const data = await response
      this.setState({ topicList: data })
      this.setState({ loading: false });
    };
    fetchData();
  }

  goToNextPage() {
    if (this.state.page !== 5) {
      const fetchTopicData = async () => {
        this.setState({ loading: true })
        const getTopicLesson = await getTopicLessons(this.state.topicList[this.state.page])
        const responseLesson = await getTopicLesson
        this.setState({ topicListData: responseLesson })
        this.setState({ loading: false, page: this.state.page + 1 });
      };
      fetchTopicData();
    } else {
      this.setState({ page: this.state.page + 1 });
    }
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <View style={[styles.container, styles.loading]}>
          {/* <Text>Loading Lesson {this.state.page + 1}</Text> */}
          <ActivityIndicator color="white" size="large" />
        </View>
      )
    }

    switch (this.state.page) {
      case 0:
        return (
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.title}>Here is what you need to learn:</Text>
              <View style={styles.subHeading}>
                <Text style={styles.subject}>{this.state.topic}</Text>
              </View>
            </View>

            {
              (this.state.topicList.map((eachTopic, index) => {
                return (

                  <View key={index}>
                    <Text key={index} style={styles.listItem}>{index + 1}. {eachTopic}</Text>
                    <Divider />
                  </View>)
              }))
            }

            <View style={styles.centered2}>
              <View style={[styles.bottom]}>
                <PressableButton
                  title="Go to first lesson"
                  onPress={() => this.goToNextPage()}
                  bgColor='#5DB075'
                // disabled={isButtonDisabled}
                />
              </View></View>

          </View>
        )
      case 1:
        return (
          <View style={styles.container}>
            <Lesson lessonCount={0} topic={this.state.topicList[0]} onClick={() => this.goToNextPage()} data={this.state.topicListData}
            />
          </View>
        )
      case 2:
        return (
          <View style={styles.container}>
            <Lesson lessonCount={1} topic={this.state.topicList[1]} onClick={() => this.goToNextPage()} data={this.state.topicListData}
            />
          </View>
        )
      case 3:
        return (
          <View style={styles.container}>
            <Lesson lessonCount={2} topic={this.state.topicList[2]} onClick={() => this.goToNextPage()} data={this.state.topicListData}
            />
          </View>
        )
      case 4:
        return (
          <View style={styles.container}>
            <Lesson lessonCount={3} topic={this.state.topicList[3]} onClick={() => this.goToNextPage()} data={this.state.topicListData}
            />
          </View>
        )
      case 5:
        return (
          <View style={styles.container}>
            <Lesson lessonCount={4} topic={this.state.topicList[4]} onClick={() => this.goToNextPage()} data={this.state.topicListData}
            />
          </View>
        )
      case 6:
        return (
          <View style={[styles.container, styles.bgGreen]}>
            <LessonComplete navigation={"topic"} capTopic={this.state.topic}
            />
          </View>
        )
    }
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12
  },
  heading: {
    padding: 12,
    backgroundColor: '#5DB075',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  subject: {
    fontSize: 32,
    color: 'white',
  },
  bgGreen: {
    backgroundColor: '#5DB075',
  },
  loading: {
    backgroundColor: '#5DB075',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    color: 'red',
    // backgroundColor: '#5DB075',
  },
  centered2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 6,
    borderBottomColor: 'black',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'stretch'
  }
})

export default LessonSummary;
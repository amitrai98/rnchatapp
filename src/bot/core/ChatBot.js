import moment from 'moment';
import Realm from 'realm';
import Applogger from '../../util/Applogger';

export const trainBot = (question, context) => {
  return new Promise((resolve, rejects) => {
    const querySchema = {
      question: question,
      context: context,
      time: moment(new Date()).toISOString(),
    };

    // Initialize a Realm with query schema
    Realm.open({schema: querySchema}).then(realm => {
      realm.write(() => {
        realm.create({
          question: querySchema.question,
          context: querySchema.context,
          time: querySchema.time,
        });
      });
    });
  });
};

export const getQueryResult = (question, context) => {
  return new Promise((resolve, rejects) => {
    const querySchema = {
      question: question,
      context: context,
      time: moment(new Date()).toISOString(),
    };

    // Initialize a Realm with query schema
    Realm.open({schema: [querySchema]})
      .then(realm => {
        const answer = realm.objects('question');
        Applogger.log(`received ${answer}`);
        resolve(answer);
      })
      .catch(error => {
        Applogger.log(`there is an errors ${error}`);
        rejects(error);
      });
  });
};

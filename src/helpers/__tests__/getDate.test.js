import getDate from '../getDate';

describe('Helper function getDate', () => {
  test('return correct object when UTC formated data is passed', () => {
    expect(getDate('2017-09-19T12:47:15.000Z')).toEqual({
      dayOfMonth: '19th',
      dayOfWeek: 'Tuesday',
      month: 'August', 
      time: '13:47'
    });
  })
})
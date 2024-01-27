import ReadTypeBox from '../question-box/ReadTypeBox';

// question 페이지일때 read타입 제어

const ReadTypeSwitch = ({ type, value }) => {
  switch (type) {
    case 'read':
      return <ReadTypeBox readTypeValue={value} />;
    default:
      return null;
  }
};

export default ReadTypeSwitch;

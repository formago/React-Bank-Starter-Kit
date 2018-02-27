
/* eslint-disable */
const service = {

  getGrid() {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }

    // use for API (dont delete)
    // fetch('/rsAppsArm/auth/usermenu', {
    //   method: 'POST',
    //   data: {
    //     name: self.refs.name,
    //     job: self.refs.job,
    //   },
    // })
    // .then((response) => response.json());

    return data;
  },

};

export default service;

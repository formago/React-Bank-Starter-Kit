
// export default function keys() {
//     return {
//         baseURL: "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080"
//     }
// };


module.exports = {
    baseURL: "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080",
    login: {
        login:"/rsAppsArm/auth/login/",
        refresh:"/rsAppsArm/auth/refresh/"
    },
    clients : {
        list : "/rsAppsArm/client/list",
    }
}

//  export const baseURL = "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080";


// let config = {
//     baseURL = "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080";
// }

// export default config;

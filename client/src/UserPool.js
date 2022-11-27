import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    // Bits N Bytes AWS Cognito
    UserPoolId: "us-west-1_xEnp6nNYY",
    ClientId: "69nh5skpbkllh6sir6f628g3mh"
}

export default new CognitoUserPool(poolData);
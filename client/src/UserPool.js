import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    // Bits N Bytes AWS Cognito
    // UserPoolId: "us-west-1_xEnp6nNYY",
    // ClientId: "69nh5skpbkllh6sir6f628g3mh"

    UserPoolId: "us-west-2_c6ph88Xti",
    ClientId: "26ro66f32t1gmj7bs3g7sk1cts"
}

export default new CognitoUserPool(poolData);
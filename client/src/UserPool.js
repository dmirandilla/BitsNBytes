import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    // Bits N Bytes
    UserPoolId: "us-west-1_MobyHN0Mh",
    ClientId: "72pkhhggk8k878sfhkscs2t1e"
}

export default new CognitoUserPool(poolData);
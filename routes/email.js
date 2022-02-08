const aws = require("aws-sdk");
const ses = new aws.SES();
const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  };
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(err.message),
  };
}

function generateEmailParams(body) {
  const { to, from, template, data } = JSON.parse(body);
  console.log(to, from, template, data);
  if (!(to && from && data && template)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'to', 'from', 'template ', and 'data' ."
    );
  }

  return {
    Source: from,
    Destination: { ToAddresses: to },
    Template: template,
    TemplateData: JSON.stringify(data),
  };
}

module.exports.send = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body);
    const data = await ses.sendTemplatedEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};

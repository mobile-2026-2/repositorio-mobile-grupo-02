const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// O mapa nativo não existe na web: nesse caso, o import vira um módulo vazio.
const resolverPadrao = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === "web" && moduleName === "react-native-maps") {
    return { type: "empty" };
  }
  return resolverPadrao
    ? resolverPadrao(context, moduleName, platform)
    : context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
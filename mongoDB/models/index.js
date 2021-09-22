const mongoose = require("mongoose");

const { userSchema } = require("./Users.js");
const { adminSchema } = require("./Admins.js");
const { buyerSchema } = require("./Buyers.js");
const { domainSchema } = require("./Domains.js");
const { hostingSchema } = require("./Hosting.js");
const { priceSchema } = require("./Prices.js");
const { productSchema } = require("./Products.js");
const { projectSchema } = require("./Projects.js");
const { promotionSchema } = require("./Promotions.js");
const { serverSchema } = require("./Servers.js");
const { sourcecodeSchema } = require("./SourceCode.js");
const { vpsSchema } = require("./VPS.js");
const { templateSchema } = require("./WebTemplate.js");
const { userDomain } = require("./UserDomain.js");
const { userVPS } = require("./UserVPS.js");
const { userServer } = require("./UserServer.js");
const { userHosting } = require("./UserHosting.js");
const { userProduct } = require("./UserProduct.js");

const UserVPS = mongoose.model("UserVPS", userVPS);
const UserServer = mongoose.model("UserServer", userServer);
const UserHosting = mongoose.model("UserHosting", userHosting);
const UserDomain = mongoose.model("UserDomain", userDomain);
const UserProduct = mongoose.model("UserProduct", userProduct);

const Users = mongoose.model("Users", userSchema);
const Admins = mongoose.model("Admins", adminSchema);
const Buyers = mongoose.model("Buyers", buyerSchema);
const Domains = mongoose.model("Domains", domainSchema);
const Hosting = mongoose.model("Hosting", hostingSchema);
const Prices = mongoose.model("Prices", priceSchema);
const Products = mongoose.model("Products", productSchema);
const Projects = mongoose.model("Projects", projectSchema);
const Promotions = mongoose.model("Promotions", promotionSchema);
const Servers = mongoose.model("Servers", serverSchema);
const SourceCode = mongoose.model("SourceCode", sourcecodeSchema);
const VPS = mongoose.model("VPS", vpsSchema);
const WebTemplate = mongoose.model("WebTemplate", templateSchema);

export {
  Users,
  Admins,
  Buyers,
  Domains,
  Hosting,
  Prices,
  Products,
  Projects,
  Promotions,
  Servers,
  SourceCode,
  VPS,
  WebTemplate,
  UserDomain,
  UserProduct,
  UserHosting,
  UserServer,
  UserVPS,
};
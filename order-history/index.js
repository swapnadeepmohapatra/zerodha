import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import {
  mockStockPrices,
  mockHistoricalData,
  mockCompanyInfo,
  mockUserPortfolios,
} from "./utils/mockData.js";
import { PORT } from "./utils/config.js";

const schema = buildSchema(`
 type StockPrice {
   symbol: String!
   price: Float!
   timestamp: String!
 }

 type HistoricalData {
   date: String!
   open: Float!
   high: Float!
   low: Float!
   close: Float!
   volume: Int!
 }

 type CompanyInfo {
   name: String!
   sector: String!
   CEO: String!
   headquarters: String!
   description: String!
 }

 type Holding {
   symbol: String!
   quantity: Int!
   averagePrice: Float!
 }

 type UserPortfolio {
   holdings: [Holding!]!
   cashBalance: Float!
   totalValue: Float!
 }

 type Query {
   stockPrice(symbol: String!): StockPrice
   historicalData(symbol: String!, startDate: String!, endDate: String!): [HistoricalData!]!
   companyInfo(symbol: String!): CompanyInfo
   userPortfolio(userId: String!): UserPortfolio
 }
`);

const root = {
  stockPrice: ({ symbol }) => mockStockPrices[symbol],
  historicalData: ({ symbol, startDate, endDate }) =>
    mockHistoricalData[symbol].filter(
      (entry) => entry.date >= startDate && entry.date <= endDate
    ),
  companyInfo: ({ symbol }) => mockCompanyInfo[symbol],
  userPortfolio: ({ userId }) => mockUserPortfolios[userId],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});

export type InsightType= {
  id: number;
  negrito: string;
  text: string;
}

export type Message = {
  id: number;
  from: "user" | "bot";
  text: string;
};

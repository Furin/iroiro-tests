import Category from "@/app/_interfaces/category";
import CategoryConfig from "@/app/_interfaces/category-config";

export default interface QuestionType {
  values: {
    [key: string]: string;
  }
  category: string;
  labels?: Array<string>;
  categoryDetails?: Category;
  questionConfig?: CategoryConfig;
}
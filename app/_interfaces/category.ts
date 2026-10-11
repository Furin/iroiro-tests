import CategoryComponent from "@/app/_interfaces/category-component";

export default interface Category {
  title: string;
  subject: string;
  key: string;
  components: Array<CategoryComponent>;
}

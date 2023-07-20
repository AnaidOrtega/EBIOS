// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

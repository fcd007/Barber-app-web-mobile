
interface ITemplateVariable {
  [key: string]: string | number;
}

export default interface IParseTemplateDTO {
  template: string;
  variables:ITemplateVariable
}

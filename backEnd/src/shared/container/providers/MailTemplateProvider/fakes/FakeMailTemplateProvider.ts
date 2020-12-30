import IMailParseMalTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from "../models/IMailTemplateProvider";

class FakeMailTemplateProvider implements IMailTemplateProvider{
  public async parse({
    template
  }: IMailParseMalTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;

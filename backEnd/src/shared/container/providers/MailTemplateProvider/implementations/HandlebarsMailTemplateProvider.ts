import handlebars from 'handlebars';

import IParseMalTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from "../models/IMailTemplateProvider";

class HandlebarsMailTemplateProvider implements IMailTemplateProvider{
  public async parse({ template, variables }: IParseMalTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;

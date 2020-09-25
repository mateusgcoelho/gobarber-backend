import IParseMailTemplateDTO from "../dtos/IParseMailTemplateDTO";
import IMailTemplateProvider from "../models/IMailTemplateProvider";

class FakeMailTemaplteProvider implements IMailTemplateProvider {
  public async parse({
     template,
     variables
  }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemaplteProvider;

import { uuid } from 'uuidv4';

import IUserTokensRepostory from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '../../infra/typeorm/entities/UserToken';

// SOLID - L = Liskov Substitution Principle

class FakeUserTokensRepository implements IUserTokensRepostory {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.userTokens.find(
      findToken => findToken.token === token
    );

    return userToken;
  }
}

export default FakeUserTokensRepository;

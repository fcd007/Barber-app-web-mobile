import { v4 as uuidv4, v4 } from 'uuid';

import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

class FakeUsersTokensRepository implements IUsersTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(
      userToken, {
        id: v4(),
        token: v4(),
        user_id,
      });

      this.userTokens.push(userToken);

    return userToken;
  }
}

export default FakeUsersTokensRepository;

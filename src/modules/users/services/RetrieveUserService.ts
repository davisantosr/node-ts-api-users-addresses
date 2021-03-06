import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/userRepository';

interface IRequest {
  user_id: number;
}

class RetrieveUserService {
  public async execute({ user_id }: IRequest): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default RetrieveUserService;

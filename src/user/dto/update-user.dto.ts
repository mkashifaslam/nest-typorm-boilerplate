import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto extends CreateUserDto {
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

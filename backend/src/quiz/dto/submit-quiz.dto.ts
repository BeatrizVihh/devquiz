import { Type } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsInt, Max, Min, ValidateNested } from 'class-validator';

export class AnswerDto {
  @IsInt()
  @Min(1)
  questionId: number;

  @IsInt()
  @Min(0)
  @Max(4)
  selectedIndex: number;
}

export class SubmitQuizDto {
  @IsArray()
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}

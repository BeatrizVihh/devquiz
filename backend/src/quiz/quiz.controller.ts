import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmitQuizDto } from './dto/submit-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getQuiz() {
    return this.quizService.getQuestions();
  }

  @Post('submit')
  submit(@Body() dto: SubmitQuizDto) {
    return this.quizService.evaluate(dto.answers);
  }
}

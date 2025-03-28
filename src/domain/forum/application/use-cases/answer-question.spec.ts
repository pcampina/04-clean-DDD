import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers.repository'

const fakeAnswerRepository: AnswersRepository = {
  create: async () => {},
}

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})

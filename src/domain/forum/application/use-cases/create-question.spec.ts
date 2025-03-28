import { QuestionsRepository } from '../repositories/questions.repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsUseCase: QuestionsRepository = {
  create: async () => {},
}

test('Create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsUseCase)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})

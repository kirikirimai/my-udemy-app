'use server';

interface FormState {
    error: string;
}
export const createTask = async (taskId: number, state: FormState, formData: FormData): Promise<FormState> => {
    //DBにタスクを作成する
    console.log(formData.get('name'));
    console.log('taskId:::' + taskId);
    state.error = 'エラーが発生しました';
    return state;
}
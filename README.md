## React - The Complete Guide 
### 課題 \#1

Udemyで提供されているコース「[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)」の1つ目の課題です。

インストラクターから実装すべきタスクをリストアップされ、それらを独力で実装しました。  
したがって、100%自走して書いたJavaScript/Reactのコードを格納したリポジトリとなり、コース内で提供されている模範解答のコードとは別物となります。  
この「課題 #1」はReactの最も基礎的な部分の理解を目的としています。

実装したタスクは以下のとおり。
1. 2つの新しいコンポーネント(UserInputとUserOutput)を定義する
2. UserInputコンポーネントはテキストの入力要素を、UserOutputコンポーネントは2つの\<p\>要素を持つように定義する
3. 2番で定義したUserOutputコンポーネントを使用し、複数のUserOutputコンポーネントをレンダリングする
4. Appコンポーネントにstateを追加し、UserOutputにprops引数として渡し、UserOutputコンポーネント上でそのテキストを表示する  
5. Appコンポーネントに新たなメソッドを定義し、UserInputに入力されたテキストをAppコンポーネントのstateに反映する処理を加える
6. 5番のタスクを行うために、AppコンポーネントからUserInputコンポーネントにprops引数としてメソッドのリファレンス(参照)を渡す
7. UserInputコンポーネントで入力した値が既存のUserOutputのテキスト内容を上書きするように処理を行う
8. 双方向bindingの処理をUserInputコンポーネントに追加し、初期値をUserInputのテキスト値として設定し、表示する
9. CSSによるスタイル処理を各コンポーネント及び要素に追加する
　

## React - The Complete Guide 
### The First Assignment
This is the first assignment from React - The Complete Guide(incl Hooks, React Router, Redux).
The course link is https://www.udemy.com/course/react-the-complete-guide-incl-redux/
The code presented here is 100% my own work. It is neither a copy from other resources nor follow-and-code tutorials.

The assignment instruction is below.

Assignment #1
1. Create TWO new components: UserInput and UserOutput
2. UserInput should hold an input element, UserOutput two paragraphs
3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
4. Pass a username (of your choice) to UserOutput via props and display it there
5. Add state to the App component (=> the username) and pass the username to the UserOutput component
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9. Add two-way-binding to your input (in UserInput) to also display the starting username
10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

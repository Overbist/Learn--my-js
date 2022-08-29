import Head from "next/head"
import { Fragment } from "react"
import { v4 as uuid } from "uuid"

import { CodeHighlighter } from "@components/CodeHighlighter/CodeHighlighter"
import { Layout } from "@components/layout/Layout"

import { tasksData } from "@data/tasksData"

function Tasks() {
  return (
    <>
      <Head>
        <title>Tasks</title>
        <meta name="description" content="Tasks Page" />
      </Head>
      <Layout pageClassName="tasks">
        <h1 className="tasks__title title title--center">Задачи для собеседований</h1>
        <CodeHighlighter>
          {`Какое будет выведено значение: let x = 5; alert( x++ ); ?
Чему равно такое выражение: [ ] + false - null + true ?
Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
Чему равна сумма [ ] + 1 + 2?
Что выведет этот код: alert( "1"[0] )?
Чему равно 2 && 1 && null && 0 && undefined ?
Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Что выведет этот код: alert( +"Infinity" ); ?
Верно ли сравнение: "Ёжик" & "яблоко"?
Чему равно 0 || "" || 2 || undefined || true || falsе`}
        </CodeHighlighter>
        <h2 className="tasks__taskName">Data:</h2>
        <CodeHighlighter>
          {`const strArr = ["apple", "banana", "peach", "orange", "melon"] \nconst numArr = [1, 2, 34, 4, 7, 2, 43, 4, 7, 8, 9, 1, 56, 3, 2]`}
        </CodeHighlighter>
        {tasksData.map((taskObj) => {
          return (
            <Fragment key={uuid()}>
              <h2 className="tasks__taskName">{taskObj.name}</h2>
              <CodeHighlighter>{taskObj.task}</CodeHighlighter>
            </Fragment>
          )
        })}
      </Layout>
    </>
  )
}

export default Tasks

import React from 'react'

const IndieQuiz = ({ params }: { params: { quizid: string } }) => {
    return (
        <div>IndieQuiz {params.quizid}</div>
    )
}

export default IndieQuiz
-- Use this to edit questions.
UPDATE questions
SET question = ${question},
    remediation = ${remediation},
    answer = ${answer},
    distractor1 = ${distractor1},
    distractor2 = ${distractor2},
    distractor3 = ${distractor3}
WHERE questions.id = ${id};
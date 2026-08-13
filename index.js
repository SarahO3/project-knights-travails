
function isValidMove(x, y) {
    return x >= 0 && x < 7 && y >= 0 && y < 7;
}


function getKnightMoves([x, y]) {

    const moves = [];

    const directions = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1]
    ];

    for (const [dx, dy] of directions) {

        const newX = x + dx;
        const newY = y + dy;

        if (isValidMove(newX, newY)) {
            moves.push([newX, newY]);
        }
    }

    return moves;
}


function knightMoves(start, target) {

    const queue = [[start, [start]]];

    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {

        const [current, path] = queue.shift();

        if (
            current[0] === target[0] &&
            current[1] === target[1]
        ) {
            console.log(
                `You made it in ${path.length - 1} moves!`
            );

            console.log("Here's your path:");

            path.forEach(square => {
                console.log(`[${square}]`);
            });

            return path;
        }

        const neighbours = getKnightMoves(current);

        for (const neighbour of neighbours) {

            const neighbourKey = neighbour.toString();

            if (!visited.has(neighbourKey)) {

                visited.add(neighbourKey);

                const newPath = [...path, neighbour];

                queue.push([neighbour, newPath]);
            }
        }
    }

    return "No path found";
}
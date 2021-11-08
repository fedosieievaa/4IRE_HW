let N = +prompt("Enter number of Fibonacci sequence:");
while (N !== Number.parseInt(N)) {
    N = +prompt("Enter only digit (Ex.: 0, 1, 2...)");
}

let F0 = 0;
let F1 = 1;

const getFibonacci = (first, second, N) => {

    switch (N) {
        case 0:
            return first;
        case 1:
            return second;
    }

    if (N > 1) {
        return getFibonacci(second, first + second, N - 1);
    }

    if (N < 0) {
        return getFibonacci(second - first, first, N + 1);
    }
}

alert(`${N} number of Fibonacci seguence: ${getFibonacci(F0, F1, N)}`);
const TILE = 30;
const COLS = 18;
const ROWS = 18;

const E = 0;
const B = 1;
const T = 2;
const S = 3;
const P = 4;

const COLORS = {
    bg: '#000000',
    wall: '#8B6914',
    wallDark: '#6B4F10',
    block: '#4a7c30',
    blockDark: '#2d5018',
    trail: '#3a6025',
    trailDark: '#1e3a0f',
    playerColors: ['#9aff5f', '#ffcc00', '#ff6a00', '#ff2512'],
    playerEye: '#ffffff',
    packColor: '#f7dfa7',
    heart: '#cc3333',
    start: '#8B6914',
    empty: '#000000',
};

const LEVELS = [
    {
        start: [2, 10],
        map: [
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, B, B, B, E, T, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, B, B, B, B, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, B, B, B, B, E, E, E, P, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, P, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, P, E, E, E, P, E, E, E, E, E, E, B],
            [B, E, B, B, B, B, B, B, B, B, B, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
        ]
    },
    {
        start: [1, 14],
        map: [
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, T, B],
            [B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, B, B, B, B, E, E, E, E, E, B, B, B, B, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, B, B, B, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, B, B, B, E, E, E, E, E, E, E, E, E, B, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, B, B, B, E, E, E, B, B, B, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, B, B, B, B, E, E, E, E, E, E, E, E, E, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, S, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
        ]
    },
    {
        start: [1, 15],
        map: [
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, T, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, B, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, B],
            [B, B, B, B, B, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, B, B, B, B, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, B, B, B, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, B, B, B, B, B, B, B, E, E, E, E, E, E, E, E, E, B],
            [B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B],
            [B, S, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
            [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
        ]
    }
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const msgEl = document.getElementById('msg');
const levelSelect = document.getElementById('level-select');
const restartBtn = document.getElementById('restart-btn');

let currentLevelIdx = 0;
let map, player, trail, playerJumpLevel, gameOver, won;

function deepCopy(arr) { return arr.map(r => [...r]); }

function initLevel(idx) {
    const lvl = LEVELS[idx];
    map = deepCopy(lvl.map);
    const [sx, sy] = lvl.start;
    player = { x: sx, y: sy };
    trail = new Set();
    jumpState = { jumpLeft: 0, lastDir: 0 };
    gameOver = false;
    won = false;
    msgEl.textContent = '';
}

function isSolid(x, y) {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return true;
    return (map[y][x] === B || map[y][x] === S) || (trail.has(`${x},${y},h`) || trail.has(`${x},${y},v`));
}

function isPack(x, y) {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return false;
    return map[y][x] === P;
}

function isSolidOrPack(x, y) {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return true;
    return (map[y][x] === B || map[y][x] === S || map[y][x] === P) || (trail.has(`${x},${y},h`) || trail.has(`${x},${y},v`));
}

function returnPlayerJumpLevel(x, y) {
    let count = -1;
    let foundFloorOrHorizontalTrail = false;

    while (foundFloorOrHorizontalTrail === false) {
        y = y + 1;

        if ((map[y][x] === B || map[y][x] === S || map[y][x] === P) || trail.has(`${x},${y},h`)) {
            foundFloorOrHorizontalTrail = true;
        }

        count = count + 1;
    }

    return count;
}

function hasFloorBelow(x, y) {
    return isSolid(x, y + 1) || isPack(x, y + 1);
}

function getCell(x, y) {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return B;
    return map[y][x];
}

function movePlayer(dx, dy) {
    if (gameOver || won) return;
    
    let px = player.x, py = player.y;
    const nx = px + dx;
    const ny = py + dy;
    const nextPlayerJumpLevel = returnPlayerJumpLevel(px, player.y + dy)
    console.log("nextPlayerJumpLevel: " + nextPlayerJumpLevel);

    if (dy === -1) {
        if (nextPlayerJumpLevel <= 3 && !isSolid(nx, ny) && !isPack(nx, ny)) {
            // console.log(`posicao do player x:${player.x}, y:${player.y}`);
            playerJumpLevel = nextPlayerJumpLevel
            trail.add(`${player.x},${player.y},v`);
            player.y = ny;
        }
    } else {
        if (isPack(nx, py)) {
            console.log(`is pack ${nx} e ${py}`);
            movePack(nx, py, dx);
        } 

        if (!isSolid(nx, py) && !isPack(nx, py)) {
            player.x = nx;
            trail.add(`${px},${player.y},h`);

            // Aplicar gravidade no jogador
            while (!hasFloorBelow(player.x, player.y)) {
                trail.add(`${player.x},${player.y},v`);
                player.y++;
                if (player.y >= ROWS) break;
            }

            playerJumpLevel = returnPlayerJumpLevel(player.x, player.y)
        }
    }

    px = player.x; 
    py = player.y;

    if (isSolidOrPack(px+1, py) && isSolidOrPack(px-1, py) && isSolidOrPack(px, py-1)) {
        playerJumpLevel = 3;
    }

    console.log("currentPlayerJumpLevel: " + playerJumpLevel);

    checkWin();
    return;
}

function movePack(x, y, direction) {
    nx = x + direction;

    if (!isPack(x, y) || isPack(nx, y) || isSolid(nx, y)) return;

    map[y][x] = E;
    map[y][nx] = P;

    // Aplicar gravidade na caixa movida
    while (!hasFloorBelow(nx, y)) {
        map[y][nx] = E;
        y = y + 1;
        map[y][nx] = P;
    }
}

function checkWin() {
    const cell = getCell(player.x, player.y);
    if (cell === T) {
        won = true;
        msgEl.textContent = 'Você chegou ao coração! Parabéns!';
    }
}

function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

function drawBlock(x, y, color, darkColor) {
    const px = x * TILE;
    const py = y * TILE;
    
    ctx.fillStyle = color;
    ctx.fillRect(px, py, TILE, TILE);
    ctx.fillStyle = darkColor;
    ctx.fillRect(px, py + TILE - 3, TILE, 3);
    ctx.fillRect(px + TILE - 3, py, 3, TILE);
    ctx.strokeStyle = darkColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            const bx = px + i * 10, by = py + j * 15;
            ctx.strokeRect(bx + 1, by + 1, 8, 13);
        }
    }
}

function drawTarget(cx, cy, size) {
    ctx.save();
    ctx.fillStyle = COLORS.heart;
    ctx.beginPath();
    const x = cx, y = cy;
    ctx.moveTo(x, y + size * 0.3);
    ctx.bezierCurveTo(x, y, x - size, y, x - size, y + size * 0.4);
    ctx.bezierCurveTo(x - size, y + size * 0.8, x, y + size * 1.1, x, y + size * 1.1);
    ctx.bezierCurveTo(x, y + size * 1.1, x + size, y + size * 0.8, x + size, y + size * 0.4);
    ctx.bezierCurveTo(x + size, y, x, y, x, y + size * 0.3);
    ctx.fill();
    ctx.restore();
}

function drawPlayer(px, py) {
    const x = px * TILE, y = py * TILE;
    ctx.fillStyle = COLORS.playerColors[playerJumpLevel] || COLORS.playerColors[0];
    ctx.fillRect(x + 4, y + 3, TILE - 8, TILE - 6);
    ctx.fillStyle = COLORS.playerEye;
    ctx.fillRect(x + 7, y + 7, 4, 4);
    ctx.fillRect(x + 15, y + 7, 4, 4);
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 8, y + 8, 2, 2);
    ctx.fillRect(x + 16, y + 8, 2, 2);
    ctx.fillStyle = COLORS.player;
    ctx.fillRect(x + 8, y + 16, 4, 5);
    ctx.fillRect(x + 16, y + 16, 4, 5);
}

function drawPack(x, y) {
    const px = x * TILE;
    const py = y * TILE;
    
    ctx.fillStyle = COLORS.packColor;
    ctx.fillRect(px, py, TILE, TILE);
    ctx.fillStyle = COLORS.packColor;
    ctx.fillRect(px, py + TILE - 3, TILE, 3);
    ctx.fillRect(px + TILE - 3, py, 3, TILE);
    ctx.strokeStyle = COLORS.darkColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            const bx = px + i * 10, by = py + j * 15;
            ctx.strokeRect(bx + 1, by + 1, 8, 13);
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = map[row][col];
            const isTrail = trail.has(`${col},${row},v`) || trail.has(`${col},${row},h`);
            const px = col * TILE, py = row * TILE;

            if (cell === B) {
                drawBlock(col, row, COLORS.wall, COLORS.wallDark);
            } else if (cell === S) {
                drawBlock(col, row, '#7a5810', '#5a3f08');
            } else if (isTrail) {
                drawBlock(col, row, COLORS.trail, COLORS.trailDark);
            } else if (cell === T) {
                const hx = px + TILE / 2;
                const hy = py + 4;
                drawTarget(hx, hy, 8);
            } else if (cell === P) {
                drawPack(col, row);
            }
        }
    }

    drawPlayer(player.x, player.y);

    if (won) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 28px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('VOCÊ GANHOU!', canvas.width / 2, canvas.height / 2 - 16);
        ctx.font = '16px monospace';
        ctx.fillText('Pressione Reiniciar', canvas.width / 2, canvas.height / 2 + 20);
    }
}

document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
    }
    if (e.key === 'ArrowLeft') movePlayer(-1, 0);
    if (e.key === 'ArrowRight') movePlayer(1, 0);
    if (e.key === 'ArrowUp') movePlayer(0, -1);
});

levelSelect.addEventListener('change', () => {
    currentLevelIdx = parseInt(levelSelect.value);
    initLevel(currentLevelIdx);
});

restartBtn.addEventListener('click', () => {
    initLevel(currentLevelIdx);
});

initLevel(0);
gameLoop();
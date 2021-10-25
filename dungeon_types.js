export const MoveType = {
    Scissors: 0,
    Paper: 1,
    Rock: 2
}

export const MoveWinTable = {
    [MoveType.Scissors]: MoveType.Paper,
    [MoveType.Paper]: MoveType.Rock,
    [MoveType.Rock]: MoveType.Scissors
}

export const AltarType = {
    Health: 0,
    Energy: 1
}

export const TrapType = {
    Energy: 0,
    Health: 1
}

export const CombatAction = {
    Attack: 0,
    SwapEquipment: 1
}
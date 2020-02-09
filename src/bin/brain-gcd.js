#!/usr/bin/env node

import { rule, askQuestion } from '../games/gcd';
import startGame from '..';

startGame(rule, askQuestion);

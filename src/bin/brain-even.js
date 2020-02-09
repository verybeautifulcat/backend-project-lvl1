#!/usr/bin/env node

import { rule, askQuestion } from '../games/even';
import startGame from '..';

startGame(rule, askQuestion);

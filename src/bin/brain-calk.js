#!/usr/bin/env node

import { rule, askQuestion } from '../games/calk';
import startGame from '..';

startGame(rule, askQuestion);

#!/usr/bin/env node

import { rule, askQuestion } from '../games/prime';
import startGame from '..';

startGame(rule, askQuestion);

#!/usr/bin/env node

import { rule, askQuestion } from '../games/progression';
import startGame from '..';

startGame(rule, askQuestion);

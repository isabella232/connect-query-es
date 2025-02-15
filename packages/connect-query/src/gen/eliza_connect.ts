// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConverseRequest, ConverseResponse, CountRequest, CountResponse, IntroduceRequest, IntroduceResponse, ListRequest, ListResponse, Nothing, SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * ElizaService provides a way to talk to Eliza, a port of the DOCTOR script
 * for Joseph Weizenbaum's original ELIZA program. Created in the mid-1960s at
 * the MIT Artificial Intelligence Laboratory, ELIZA demonstrates the
 * superficiality of human-computer communication. DOCTOR simulates a
 * psychotherapist, and is commonly found as an Easter egg in emacs
 * distributions.
 *
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export const ElizaService = {
  typeName: "connectrpc.eliza.v1.ElizaService",
  methods: {
    /**
     * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
     *
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SayAgain is a unary RPC. Eliza responds to the prompt with a single sentence.
     *
     * @generated from rpc connectrpc.eliza.v1.ElizaService.SayAgain
     */
    sayAgain: {
      name: "SayAgain",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Converse is a bidirectional RPC. The caller may exchange multiple
     * back-and-forth messages with Eliza over a long-lived connection. Eliza
     * responds to each ConverseRequest with a ConverseResponse.
     *
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Converse
     */
    converse: {
      name: "Converse",
      I: ConverseRequest,
      O: ConverseResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Introduce is a server streaming RPC. Given the caller's name, Eliza
     * returns a stream of sentences to introduce itself.
     *
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Introduce
     */
    introduce: {
      name: "Introduce",
      I: IntroduceRequest,
      O: IntroduceResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * Second Service just to make sure multiple file generation works
 *
 * @generated from service connectrpc.eliza.v1.SecondService
 */
export const SecondService = {
  typeName: "connectrpc.eliza.v1.SecondService",
  methods: {
    /**
     * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
     *
     * @generated from rpc connectrpc.eliza.v1.SecondService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Converse is a bidirectional RPC. The caller may exchange multiple
     * back-and-forth messages with Eliza over a long-lived connection. Eliza
     * responds to each ConverseRequest with a ConverseResponse.
     *
     * @generated from rpc connectrpc.eliza.v1.SecondService.Converse
     */
    converse: {
      name: "Converse",
      I: ConverseRequest,
      O: ConverseResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Introduce is a server streaming RPC. Given the caller's name, Eliza
     * returns a stream of sentences to introduce itself.
     *
     * @generated from rpc connectrpc.eliza.v1.SecondService.Introduce
     */
    introduce: {
      name: "Introduce",
      I: IntroduceRequest,
      O: IntroduceResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * @generated from service connectrpc.eliza.v1.Haberdasher
 */
export const Haberdasher = {
  typeName: "connectrpc.eliza.v1.Haberdasher",
  methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.Haberdasher.Work
     */
    work: {
      name: "Work",
      I: Nothing,
      O: Nothing,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service connectrpc.eliza.v1.Slouch
 */
export const Slouch = {
  typeName: "connectrpc.eliza.v1.Slouch",
  methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.Slouch.Work
     */
    work: {
      name: "Work",
      I: Nothing,
      O: Nothing,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service connectrpc.eliza.v1.BigIntService
 */
export const BigIntService = {
  typeName: "connectrpc.eliza.v1.BigIntService",
  methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.BigIntService.Count
     */
    count: {
      name: "Count",
      I: CountRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service connectrpc.eliza.v1.PaginatedService
 */
export const PaginatedService = {
  typeName: "connectrpc.eliza.v1.PaginatedService",
  methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.PaginatedService.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;


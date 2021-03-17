initSidebarItems({"constant":[["VERSION","Version number of this crate."]],"enum":[["Export","The value of an export passed from one instance to another."],["FiberStackError","An error while creating a fiber stack."],["InstantiationError","An error while instantiating a module."],["PoolingAllocationStrategy","The allocation strategy to use for the pooling instance allocator."],["TableElement","An element going into or coming out of a table."],["Trap","Stores trace message with backtrace."]],"fn":[["catch_traps","Catches any wasm traps that happen within the execution of `closure`, returning them as a `Result`."],["gc","Perform garbage collection of `VMExternRef`s."],["init_traps","This function performs the low-overhead platform-specific initialization that we want to do eagerly to ensure a more-deterministic global process state."],["pointer_type","The Cranelift IR type used for pointer types for this target architecture."],["raise_lib_trap","Raises a trap from inside library code immediately."],["raise_user_trap","Raises a user-defined trap immediately."],["ref_type","The Cranelift IR type used for reference types for this target architecture."],["resume_panic","Carries a Rust panic across wasm code and resumes the panic on the other side."],["with_last_info","Runs `func` with the last `trap_info` object registered by `catch_traps`."]],"mod":[["libcalls","Runtime library calls."]],"struct":[["ExportFunction","A function export value."],["ExportGlobal","A global export value."],["ExportMemory","A memory export value."],["ExportTable","A table export value."],["GdbJitImageRegistration","Registeration for JIT image"],["Imports","Resolved import pointers."],["InstanceAllocationRequest","Represents a request for a new runtime instance."],["InstanceHandle","A handle holding an `Instance` of a WebAssembly module."],["InstanceLimits","Represents the limits placed on instances by the pooling instance allocator."],["LinkError","An link error while instantiating a module."],["Memory","Represents an instantiation of a WebAssembly memory."],["Mmap","A simple struct consisting of a page-aligned pointer to page-aligned and initially-zeroed memory and a length."],["ModuleLimits","Represents the limits placed on a module for compiling with the pooling instance allocator."],["OnDemandInstanceAllocator","Represents the on-demand instance allocator."],["PoolingInstanceAllocator","Implements the pooling instance allocator."],["StackMapRegistry","A registry of stack maps for currently active Wasm modules."],["Table","Represents an instance's table."],["TlsRestore","Opaque state used to help control TLS state across stack switches for async support."],["VMCallerCheckedAnyfunc","The VM caller-checked \"anyfunc\" record, for caller-side signature checking. It consists of the actual function pointer and a signature id to be checked by the caller."],["VMContext","The VM \"context\", which is pointed to by the `vmctx` arg in Cranelift. This has information about globals, memories, tables, and other runtime state associated with the current instance."],["VMExternRef","An external reference to some opaque data."],["VMExternRefActivationsTable","A table that over-approximizes the set of `VMExternRef`s that any Wasm activation on this thread is currently using."],["VMFunctionBody","A placeholder byte-sized type which is just used to provide some amount of type safety when dealing with pointers to JIT-compiled function bodies. Note that it's deliberately not Copy, as we shouldn't be carelessly copying function body bytes around."],["VMFunctionImport","An imported function."],["VMGlobalDefinition","The storage for a WebAssembly global defined within the instance."],["VMGlobalImport","The fields compiled code needs to access to utilize a WebAssembly global variable imported from another instance."],["VMInterrupts","Structure used to control interrupting wasm code."],["VMInvokeArgument","The storage for a WebAssembly invocation argument"],["VMMemoryDefinition","The fields compiled code needs to access to utilize a WebAssembly linear memory defined within the instance, namely the start address and the size in bytes."],["VMMemoryImport","The fields compiled code needs to access to utilize a WebAssembly linear memory imported from another instance."],["VMSharedSignatureIndex","An index into the shared signature registry, usable for checking signatures at indirect calls."],["VMTableDefinition","The fields compiled code needs to access to utilize a WebAssembly table defined within the instance."],["VMTableImport","The fields compiled code needs to access to utilize a WebAssembly table imported from another instance."]],"trait":[["InstanceAllocator","Represents a runtime instance allocator."],["RuntimeLinearMemory","A linear memory"],["RuntimeMemoryCreator","A memory allocator"],["TrapInfo","A package of functionality needed by `catch_traps` to figure out what to do when handling a trap."]],"type":[["RuntimeInstance","Runtime representation of an instance value, which erases all `Instance` information since instances are just a collection of values."],["SignalHandler","Function which may handle custom signals while processing traps."],["VMTrampoline","Trampoline function pointer type."]]});